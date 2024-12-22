# Vite TypeScript Markdown Blog Project

This project is a **Vite** and **TypeScript**-based web application that hosts and displays blog posts written in **Markdown**. Markdown files are scanned from the `src/content` directory, parsed for metadata (title, date, author, and categories), and then rendered on the site. The project is ideal for static hosting on platforms like **GitHub Pages** and supports client-side rendering, which automatically reflects new blog posts added to the content folder.

## Project Structure

```
root
├── src
│   ├── content          # Markdown files for blog posts
│   │   ├── example.md   # Example blog post with metadata
│   │   └── ...
│   ├── components
│   │   ├── BlogList.tsx # Component to list blogs
│   │   └── ...
│   ├── App.tsx          # Main app file
│   └── ...
├── public
│   └── index.html       # Root HTML file
├── package.json
└── README.md
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/brighton404/blog.git
   cd blog
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Usage

### Adding New Blog Posts

1. Place new markdown files (`.md`) in the `src/content` directory.
2. Each markdown file should begin with metadata written in **YAML front matter**:

   ```markdown
   ---
   id: dummy text
   title: Dummy text
   date: 2024-10-28
   author: Lorem Ipsum
   categories: [1, 3]
   ---
   ```

   - **title**: The title of the blog post.
   - **date**: The publish date of the blog post.
   - **author**: The name of the author.
   - **categories**: An array of category IDs.

### Metadata Parsing

The application automatically scans all `.md` files in `src/content` and extracts the metadata for each post. This data is then passed to the `BlogList.tsx` component, where it is displayed in a list format on the website.

### Blog List Component

The `BlogList.tsx` component collects and displays the metadata extracted from each markdown file, rendering a dynamic, client-side list of blog posts. New blog files added to `src/content` are scanned automatically, and the list updates to include them.

## Deployment

This app is optimized for deployment on GitHub Pages or any other static hosting solution that supports client-side rendering.

To deploy to GitHub Pages:

1. Update the `base` configuration in `vite.config.ts` to match your GitHub repository's path.
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Technologies Used

- **Vite**: A fast build tool for front-end development.
- **TypeScript**: Type-safe language to improve reliability.
- **Markdown**: For writing blog content.
- **React**: For building the UI.

## Future Improvements

- Adding pagination for large numbers of blog posts.
- Improving SEO by adding meta tags dynamically from blog metadata.
- Supporting additional metadata fields in the front matter.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.
