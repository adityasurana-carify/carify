# Configuration Files

This directory contains all configuration files for the Carify Health project.

## Files

### `components.json`
Shadcn/ui component configuration for consistent component generation and styling.

### `drizzle.config.ts`
Database configuration for Drizzle ORM including:
- Database connection settings
- Migration paths
- Schema definitions

### `postcss.config.js`
PostCSS configuration for CSS processing:
- Tailwind CSS integration
- Autoprefixer for browser compatibility

### `tailwind.config.ts`
Tailwind CSS configuration including:
- Custom color schemes
- Typography settings
- Component variants
- Animation configurations
- Plugin integrations

## Usage

These configuration files are automatically loaded by their respective tools:
- Vite loads PostCSS and Tailwind configs during build
- Drizzle Kit uses the drizzle config for database operations
- Component generation tools reference components.json

## Environment-Specific Settings

Configuration files support environment-specific overrides:
- Development settings for local development
- Production optimizations for deployment
- Test configurations for automated testing

## Customization

To customize the application:
1. Modify theme colors in `tailwind.config.ts`
2. Update database settings in `drizzle.config.ts`
3. Add new component variants in `components.json`
4. Configure build optimizations in respective config files