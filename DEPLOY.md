# Deploying Advanced Fitness to Vercel

This project is built with Next.js and is optimized for deployment on Vercel.

## Option 1: Deploy with Vercel CLI (Recommended for quick testing)

1.  **Install Vercel CLI** (if you haven't already):
    ```bash
    npm i -g vercel
    ```

2.  **Login to Vercel**:
    ```bash
    vercel login
    ```

3.  **Deploy**:
    Run the following command from the project root:
    ```bash
    vercel
    ```
    Follow the prompts to link the project. For production deployment, use:
    ```bash
    vercel --prod
    ```

## Option 2: Deploy via Git Integration (Recommended for production)

1.  **Push your code** to a Git provider (GitHub, GitLab, or Bitbucket).
2.  **Go to the Vercel Dashboard** (https://vercel.com/dashboard).
3.  **Click "Add New..."** -> **"Project"**.
4.  **Import your repository**.
5.  **Configure Project**:
    *   **Framework Preset**: Next.js (should be detected automatically).
    *   **Root Directory**: `./`
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `.next` (default)
    *   **Install Command**: `npm install`
6.  **Click "Deploy"**.

## Environment Variables

If you add any environment variables in the future (e.g., API keys), remember to add them in the Vercel Project Settings > Environment Variables.
