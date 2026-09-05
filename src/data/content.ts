import heroImg from '../assets/images/living_room_hero_1788454591836.jpg';
import armchairImg from '../assets/images/armchair_product_1788454610541.jpg';
import vasesImg from '../assets/images/ceramic_vases_1788454628916.jpg';
import lampImg from '../assets/images/minimalist_lamp_1788454643780.jpg';
import woodBgImg from '../assets/images/wood_table_backdrop_1788454659700.jpg';
import dalokLogoImg from '../assets/images/dalok_interiors_logo_1788456656170.jpg';
import { CategoryItem, CollectionItem, ProductItem } from '../types';

export const ASSETS = {
  hero: heroImg,
  armchair: armchairImg,
  vases: vasesImg,
  lamp: lampImg,
  woodBg: woodBgImg,
  logo: dalokLogoImg,
};

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'modern-furniture',
    title: 'Modern Furniture',
    subtitle: 'Sculptural comfort engineered with honest natural woods and bespoke upholstery.',
    image: armchairImg,
    itemCount: '48 Designs',
    slug: 'furniture',
  },
  {
    id: 'decor-accents',
    title: 'Decor Accents',
    subtitle: 'Handcrafted stoneware ceramics, brushed brass vessels, and organic table pieces.',
    image: vasesImg,
    itemCount: '36 Objects',
    slug: 'decor',
  },
  {
    id: 'inspired-living',
    title: 'Inspired Living',
    subtitle: 'Architectural lighting, linen textiles, and framed gallery prints for mindful spaces.',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80',
    itemCount: '24 Curations',
    slug: 'living',
  },
];

export const FEATURED_COLLECTIONS: CollectionItem[] = [
  {
    id: 'living-room',
    title: 'Living Room',
    description: 'Harmonious seating, low-slung oak tables, and tactile textiles designed for effortless everyday gatherings.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
    itemsCount: 18,
    highlight: 'Warm Minimalist Sanctuary',
    curatorNote: 'Focused on serene neutral tones, low sightlines, and breathable natural fibers that invite quiet relaxation.',
  },
  {
    id: 'home-office',
    title: 'Home Office',
    description: 'Ergonomic precision meets Scandinavian warmth to foster deep focus, clarity, and inspired productivity.',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1000&q=80',
    itemsCount: 12,
    highlight: 'Executive Scandinavian Studio',
    curatorNote: 'Featuring seamless cable integration, solid birch desks, and directional warm task illumination.',
  },
  {
    id: 'bedroom',
    title: 'Bedroom',
    description: 'Restorative sleep retreats framed by solid timber bedframes, washed Belgian flax linen, and gentle ambient sconces.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
    itemsCount: 15,
    highlight: 'Tranquil Slumber Suite',
    curatorNote: 'Crafted with tactile materials that age with grace, minimizing visual clutter for deep sleep.',
  },
  {
    id: 'decor-accessories',
    title: 'Decor Accessories',
    description: 'Statement stone credenzas, floating bevel mirrors, sculptural clay pottery, and artisanal ambient objects.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80',
    itemsCount: 22,
    highlight: 'Artisanal Vignettes',
    curatorNote: 'Every finishing accent is hand-inspected to complement our furniture architecture with warmth and personality.',
  },
];

export const LATEST_ARRIVALS: ProductItem[] = [
  {
    id: 'elegant-armchair',
    name: 'Elegant Armchair',
    category: 'Modern Furniture',
    price: 890,
    description: 'Tailored barrel backrest with tapered natural oak legs and high-resilience boucle wool blend.',
    longDescription: 'The Elegant Armchair embodies Nordic serenity with architectural posture. Featuring a continuous wrap-around shelter silhouette and reinforced mortise-and-tenon solid white oak frame, it cradles the body with cloud-soft density.',
    image: armchairImg,
    dimensions: 'W 82cm × D 78cm × H 76cm (Seat H 44cm)',
    materials: 'FSC-Certified Solid White Oak, Heavyweight Bouclé Fabric, High-Density Latex Foam',
    designer: 'Søren Møller Atelier, Copenhagen',
    colors: [
      { name: 'Warm Oat', hex: '#E6DEC9' },
      { name: 'Pebble Grey', hex: '#B8B5AE' },
      { name: 'Deep Terracotta', hex: '#B06443' },
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 38,
  },
  {
    id: 'ceramic-vases',
    name: 'Ceramic Vases',
    category: 'Decor Accents',
    price: 240,
    description: 'Trio of wheel-thrown stoneware ceramics featuring tactile earthen matte slip glazes.',
    longDescription: 'Wheel-thrown by master ceramists in Portugal using raw local terracotta and stoneware slip. Each vase presents subtle textural variations and raw rim detailing that celebrate the wabi-sabi art of imperfect perfection.',
    image: vasesImg,
    dimensions: 'Tall: H 34cm × Ø 14cm | Medium: H 24cm × Ø 16cm | Sphere: H 16cm × Ø 18cm',
    materials: 'High-fire porous stoneware with waterproof internal glazing and matte exterior slip',
    designer: 'Elena Rossi Studio, Florence',
    colors: [
      { name: 'Raw Sandstone', hex: '#D8CFBC' },
      { name: 'Charcoal Basalt', hex: '#4A4846' },
      { name: 'Porous Chalk', hex: '#EDE8DF' },
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 52,
  },
  {
    id: 'minimalist-lamp',
    name: 'Minimalist Lamp',
    category: 'Lighting',
    price: 360,
    description: 'Tactile spun linen shade with precision milled matte-black stem and seamless touch dimmer.',
    longDescription: 'A study in geometric balance. The Minimalist Lamp casts an atmospheric warm wash (2700K) through genuine Belgian linen, anchored by an architectural weighted steel and spun brass footing with integrated stepless touch dimmer.',
    image: lampImg,
    dimensions: 'H 48cm × Shade Ø 32cm × Base Ø 18cm',
    materials: 'Belgian Linen Shade, Cast Brass & Matte Powder-Coated Steel, Warm 2700K LED',
    designer: 'Studio Nendo-Inspired, Kyoto',
    colors: [
      { name: 'Matte Obsidian', hex: '#262422' },
      { name: 'Brushed Warm Brass', hex: '#C6A15E' },
      { name: 'Natural Parchment', hex: '#EBE3D3' },
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 29,
  },
];

export const SHOWROOM_LOCATIONS = [
  {
    city: 'Ahmedabad (Main Studio)',
    address: 'Shop No. 16, Vivan Aura, Zundal, Ahmedabad, Gujarat',
    phone: '+91 95888 14702',
    isFlagship: true,
    mapsUrl: 'https://maps.google.com/?q=Shop+16+Vivan+Aura+Zundal+Ahmedabad',
  },
  {
    city: 'Gandhinagar & North Ahmedabad',
    address: 'Zundal Circle & SG Highway Design Consultations',
    phone: '+91 95888 14702',
    isFlagship: false,
    mapsUrl: 'https://maps.google.com/?q=Shop+16+Vivan+Aura+Zundal+Ahmedabad',
  },
  {
    city: 'West Ahmedabad',
    address: 'Bespoke Villas & Luxury Apartment Execution',
    phone: '+91 95888 14702',
    isFlagship: false,
    mapsUrl: 'https://maps.google.com/?q=Shop+16+Vivan+Aura+Zundal+Ahmedabad',
  },
  {
    city: 'Gujarat Turnkey Projects',
    address: 'Commercial, Residential & Penthouse Interior Design',
    phone: '+91 95888 14702',
    isFlagship: false,
    mapsUrl: 'https://maps.google.com/?q=Shop+16+Vivan+Aura+Zundal+Ahmedabad',
  },
];
