# Psycho-Color Analysis System - Deployment Guide

This document provides instructions for deploying the Psycho-Color Analysis system.

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager
- Basic knowledge of terminal/command line

## Installation Steps

1. **Extract the deployment package**
   
   Extract the contents of the deployment package to your desired location.

2. **Install dependencies**
   
   Navigate to the extracted directory and run:
   
   ```bash
   npm install
   # or
   yarn install
   ```
   
   This will install all required dependencies including:
   - React and Next.js
   - Chart.js and react-chartjs-2 for visualizations
   - SortableJS for drag-and-drop functionality

3. **Run the development server**
   
   To test the application locally:
   
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   This will start the development server at http://localhost:3000

4. **Build for production**
   
   When you're ready to deploy to production:
   
   ```bash
   npm run build
   # or
   yarn build
   ```

## Deployment Options

### Option 1: Vercel (Recommended)

The easiest way to deploy this Next.js application is using Vercel:

1. Create an account at [vercel.com](https://vercel.com)
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Run the following command in the project directory:
   ```bash
   vercel
   ```
4. Follow the prompts to complete deployment

### Option 2: Static Export

You can also export the application as static HTML:

1. Add the following to your `next.config.js`:
   ```js
   module.exports = {
     output: 'export',
   }
   ```
2. Run the build command:
   ```bash
   npm run build
   # or
   yarn build
   ```
3. The static files will be generated in the `out` directory
4. Deploy these files to any static hosting service (Netlify, GitHub Pages, etc.)

### Option 3: Self-Hosted

To deploy on your own server:

1. Build the application:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```
3. The application will be available at http://localhost:3000 by default

## Environment Configuration

The application doesn't require any specific environment variables for basic functionality. However, if you want to integrate with a real LLM API (like OpenAI), you would need to:

1. Create a `.env.local` file in the root directory
2. Add your API keys:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```
3. Modify the `/api/enhance/route.ts` file to use the actual API instead of the simulation

## Troubleshooting

- **Missing dependencies**: If you encounter errors about missing modules, try running `npm install` again
- **Build errors**: Make sure you're using a compatible Node.js version (18.x or later)
- **Chart.js issues**: If charts aren't rendering, ensure that both chart.js and react-chartjs-2 are properly installed

## Support

For additional support or questions, please refer to the documentation or contact the system administrator.
