/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryCards } from './components/CategoryCards';
import { FeaturedCollections } from './components/FeaturedCollections';
import { LatestArrivals } from './components/LatestArrivals';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { LookbookModal } from './components/LookbookModal';
import { GetInTouchModal } from './components/GetInTouchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { CategoryItem, CollectionItem, ProductItem } from './types';
import { LATEST_ARRIVALS, FEATURED_COLLECTIONS } from './data/content';

export default function App() {
  // Modal states
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationSpace, setConsultationSpace] = useState('Living Room');
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Saved Wishlist Items state
  const [wishlistItems, setWishlistItems] = useState<ProductItem[]>([
    LATEST_ARRIVALS[0], // pre-seeded with Elegant Armchair as an initial favorite
  ]);

  const wishlistIds = wishlistItems.map((item) => item.id);

  const handleToggleWishlist = (product: ProductItem) => {
    if (wishlistIds.includes(product.id)) {
      setWishlistItems((prev) => prev.filter((item) => item.id !== product.id));
    } else {
      setWishlistItems((prev) => [...prev, product]);
    }
  };

  const handleRemoveWishlist = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleExploreMore = () => {
    const collectionsEl = document.getElementById('collections');
    if (collectionsEl) {
      collectionsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: CategoryItem) => {
    // Match category to collection or open consultation
    const match = FEATURED_COLLECTIONS.find(
      (c) => c.title.toLowerCase().includes(category.slug) || category.title.toLowerCase().includes(c.id)
    );
    if (match) {
      setSelectedCollection(match);
    } else {
      // scroll to collections
      handleExploreMore();
    }
  };

  const handleOpenConsultationWithSpace = (spaceName: string) => {
    setConsultationSpace(spaceName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#2C2925] font-sans antialiased selection:bg-[#DE8654]/20 selection:text-[#8D4A27]">
      {/* 1. Header with sticky behavior, navigation, and consultation CTA */}
      <Header
        onOpenConsultation={() => {
          setConsultationSpace('Living Room');
          setIsConsultationOpen(true);
        }}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        wishlistCount={wishlistItems.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onExploreClick={handleExploreMore} />

        {/* 3. Category Cards (Modern Furniture, Decor Accents, Inspired Living) */}
        <CategoryCards onSelectCategory={handleCategorySelect} />

        {/* 4. Featured Collections (Living Room, Home Office, Bedroom, Decor Accessories) */}
        <FeaturedCollections
          onSelectCollection={(collection) => setSelectedCollection(collection)}
        />

        {/* 5. Latest Arrivals (Elegant Armchair, Ceramic Vases, Minimalist Lamp) */}
        <LatestArrivals
          onSelectProduct={(product) => setSelectedProduct(product)}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          onGetInspired={() => handleOpenConsultationWithSpace('Curated Sanctuary')}
        />

        {/* Brand Ethos and Craft Architecture */}
        <AboutSection />

        {/* Editorial Journal and Design Perspectives */}
        <BlogSection />
      </main>

      {/* Footer with Global Flagships and Newsletter */}
      <Footer
        onOpenConsultation={() => {
          setConsultationSpace('Showroom Walkthrough');
          setIsConsultationOpen(true);
        }}
      />

      {/* Interactive Modals and Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onRequestQuote={(prod) => {
          handleOpenConsultationWithSpace(prod.name);
        }}
      />

      <LookbookModal
        collection={selectedCollection}
        onClose={() => setSelectedCollection(null)}
        onBookConsultation={(collName) => handleOpenConsultationWithSpace(collName)}
      />

      <GetInTouchModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialSpace={consultationSpace}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveItem={handleRemoveWishlist}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
        onInquireAll={() => {
          setIsWishlistOpen(false);
          handleOpenConsultationWithSpace('Curated Selection of ' + wishlistItems.length + ' Pieces');
        }}
      />
    </div>
  );
}
