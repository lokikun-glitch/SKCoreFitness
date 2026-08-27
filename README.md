# SK CORE FITNESS

> **Theme**: `OG`  
> **Built with**: GYM_TEMPLATE Static Production Builder (`final_builder.py`)  
> **Deployment Target**: GitHub Pages (Static Hosting)

---

## 🚀 Deployment Instructions (GitHub Pages)

This folder contains a 100% standalone, zero-backend static website with all gym details and assets bundled.

### Option 1: Publish to a New GitHub Repository (Recommended)

1. Open your terminal in this directory:
   ```bash
   cd production/sk-core-fitness
   ```

2. Initialize a Git repository and commit all files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of SK CORE FITNESS landing page"
   ```

3. Create a new repository on GitHub (via [GitHub Web](https://github.com/new) or GitHub CLI):
   ```bash
   gh repo create sk-core-fitness --public --source=. --remote=origin --push
   ```
   *(Or link to an existing remote: `git remote add origin https://github.com/<your-username>/sk-core-fitness.git` and `git push -u origin main`)*

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/<your-username>/sk-core-fitness/settings/pages`
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select the branch: `main` / `master` and folder: `/ (root)`.
   - Click **Save**.
   - Your site will be live at: `https://<your-username>.github.io/sk-core-fitness/` in 1–2 minutes!

---

## 📁 Directory Structure

```
sk-core-fitness/
├── .nojekyll          # Disables Jekyll processing on GitHub Pages
├── index.html         # Complete rendered static landing page
├── README.md          # Project & deployment documentation
└── static/            # Isolated CSS and JS assets for the 'OG' theme
    ├── script.js
    ├── style.css
```
