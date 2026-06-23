import { groq } from 'next-sanity'

// Get all posts
export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  readingTime,
  featured,
  author->{
    name,
    slug,
    image
  },
  categories[]->{
    title,
    slug
  },
  tags
}`

// Get a single post by its slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  content,
  publishedAt,
  readingTime,
  seoTitle,
  seoDescription,
  author->{
    name,
    slug,
    image,
    designation,
    bio,
    socialLinks
  },
  categories[]->{
    title,
    slug
  },
  tags
}`

// Get trending/featured posts
export const featuredPostsQuery = groq`*[_type == "post" && featured == true] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  readingTime,
  author->{
    name,
    slug,
    image
  },
  categories[]->{
    title,
    slug
  }
}`

// Get all categories
export const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  slug,
  description
}`

// Get all authors
export const authorsQuery = groq`*[_type == "author"] | order(name asc) {
  _id,
  name,
  slug,
  image,
  designation
}`

// Get posts by category
export const postsByCategoryQuery = groq`*[_type == "post" && $category in categories[]->slug.current] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  readingTime,
  author->{
    name,
    slug,
    image
  },
  categories[]->{
    title,
    slug
  }
}`

// Get an author by slug and their posts
export const authorBySlugQuery = groq`*[_type == "author" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  image,
  designation,
  bio,
  socialLinks,
  "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readingTime,
    categories[]->{
      title,
      slug
    }
  }
}`

// Search posts
export const searchPostsQuery = groq`*[_type == "post" && (title match $searchQuery || excerpt match $searchQuery || $searchQuery in tags)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  featuredImage,
  publishedAt,
  readingTime,
  author->{
    name,
    slug,
    image
  },
  categories[]->{
    title,
    slug
  }
}`
