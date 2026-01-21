# Food Handlers Study Guide App (Peel Region, Ontario)

A comprehensive mobile and web application designed to help food service workers prepare for their Food Handler Certification. This Progressive Web App (PWA) provides study materials based on **Peel Public Health Food Handler Certification Study Guide (July 2023)**, interactive flashcards, practice quizzes, and progress tracking.

## Features

### 📚 Study Guide
- 15 comprehensive sections covering Ontario-required food safety topics
- Content aligned with Peel Public Health training requirements
- Detailed explanations and key points for each topic
- Topics include:
  - Introduction to Food Safety & Ontario Legislation (HPPA, Reg. 493/17)
  - Foodborne Illness (4 causes: chemical, physical, allergens, microbiological)
  - Food Allergens (11 Canadian priority allergens)
  - Microorganisms (viruses, bacteria, parasites, protozoa, yeasts, mold)
  - Conditions for Bacterial Growth
  - Time and Temperature Control (4°C-60°C danger zone)
  - Cooking Temperatures (specific to Canadian standards)
  - Cooling and Reheating (2-hour/4-hour rule)
  - Receiving and Storage (FIFO, inspections)
  - Preventing Cross-Contamination
  - Personal Hygiene (6-step handwashing)
  - When You're Sick (24-hour rule)
  - Cleaning and Sanitizing (3-compartment sink method)
  - Pest Control (IPM approach)
  - Food Safety Management (HACCP)

### 🎴 Flashcards
- Interactive flashcards for quick review
- Filter by category or study all topics
- Flip animation for engaging learning experience
- Navigate through cards easily

### ✅ Practice Quiz
- 30 multiple-choice questions based on Peel Public Health guide
- Instant feedback with explanations
- Track your score and progress
- Pass/fail indicator (70% passing score)
- Detailed explanations for each answer
- Questions cover all key topics from the official guide

### 📊 Progress Tracking
- Monitor completed study sections
- View quiz history and scores
- Track average and best performance
- Visual progress indicators

## Technology Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Progressive Web App** - Works offline, installable on mobile devices
- **Responsive Design** - Mobile-first approach, works on all screen sizes
- **CSS3** - Custom styling with animations and transitions

## Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd foodhandlerstudyguide
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized for best performance.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run deploy`
Builds and deploys the app to GitHub Pages manually (requires gh-pages package).

## Deployment

### Automatic Deployment with GitHub Actions

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

#### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment", select:
     - Source: **GitHub Actions**

2. **Push to Deploy**:
   - The app automatically deploys when you push to the `main` branch

3. **Manual Deployment**:
   - Go to Actions tab in your GitHub repository
   - Select "Deploy to GitHub Pages" workflow
   - Click "Run workflow"

4. **Access Your App**:
   - Once deployed, your app will be available at:
   - `https://geoffasare.github.io/foodhandlerstudyguide`

#### Deployment Workflows

The project includes two GitHub Actions workflows:

1. **Deploy Workflow** (`.github/workflows/deploy.yml`):
   - Automatically builds and deploys the app
   - Runs on push to main branch
   - Can be triggered manually

2. **CI Workflow** (`.github/workflows/ci.yml`):
   - Runs tests and builds on pull requests
   - Ensures code quality before merging

#### Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
npm run deploy
```

This will build the app and push it to the `gh-pages` branch.

## Project Structure

```
foodhandlerstudyguide/
├── .github/
│   └── workflows/
│       ├── deploy.yml      # GitHub Pages deployment
│       └── ci.yml          # Continuous integration
├── public/
│   ├── index.html          # HTML template
│   ├── manifest.json       # PWA manifest
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── StudyGuide.tsx  # Study sections component
│   │   ├── Flashcards.tsx  # Flashcard feature
│   │   ├── Quiz.tsx        # Quiz component
│   │   └── Progress.tsx    # Progress tracking
│   ├── data/
│   │   └── studyContent.ts # Study materials and quiz data
│   ├── App.tsx             # Main app component
│   ├── App.css             # Styles
│   ├── index.tsx           # Entry point
│   └── index.css
├── .gitignore
├── package.json
├── tsconfig.json
├── food-handler-text.md    # Source: Peel Public Health guide
└── README.md
```

## Features in Detail

### Progressive Web App (PWA)
This app is installable on mobile devices and can work offline after initial load. Users can:
- Install the app on their home screen
- Access content without internet connection
- Receive a native app-like experience

### Responsive Design
The app adapts seamlessly to different screen sizes:
- **Mobile**: Optimized touch-friendly interface
- **Tablet**: Enhanced layout for medium screens
- **Desktop**: Full-featured experience with expanded layouts

### Study Content
Content based on Peel Public Health Food Handler Certification Study Guide (July 2023):
- All required learning objectives for Ontario/Peel Region
- Canadian-specific temperature requirements (4°C cold / 60°C hot)
- Danger Zone: 4°C to 60°C (40°F to 140°F)
- 24-hour illness exclusion policy
- 11 priority allergens (Canadian standards)
- HPPA and Ontario Regulation 493/17 compliance
- Detailed explanations of concepts
- Key points to remember
- Real-world applications
- Best practices aligned with Ontario regulations

## Usage Guide

### Getting Started
1. **Home Screen**: Select from four main features
2. **Study Guide**: Read through each section, mark completed when done
3. **Flashcards**: Review key concepts, filter by topic
4. **Practice Quiz**: Test your knowledge with 30 questions
5. **Progress**: Track your completion and scores

### Study Tips
- Complete all study sections before taking the quiz
- Use flashcards for quick review sessions
- Take the quiz multiple times to improve your score
- Aim for at least 70% on practice quizzes

### Key Canadian/Ontario Requirements Covered
- **Legislation**: Health Protection and Promotion Act (HPPA), Ontario Food Premises Regulation 493/17
- **Danger Zone**: 4°C to 60°C (40°F to 140°F)
- **Hot Holding**: 60°C (140°F) or higher
- **Cold Holding**: 4°C (40°F) or lower
- **Cooling**: 60°C to 20°C in 2 hours, then 20°C to 4°C in next 4 hours
- **Return to Work**: 24 hours after symptoms stop
- **Handwashing**: 15-20 seconds with soap and warm water
- **Storage**: 15 cm (6 inches) off the floor
- **Priority Allergens**: 11 (includes mustard, sesame, sulphites)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is open source and available for educational purposes.

## Content Source & Acknowledgments

This study guide content is based on the **Peel Public Health Food Handler Certification Study Guide (July 2023)** for Peel Region, Ontario, Canada.

### Source Document
- **Title**: Food Handler Certification Study Guide
- **Publisher**: Peel Public Health
- **Region**: Peel Region (Mississauga, Brampton, Caledon), Ontario, Canada
- **Date**: July 2023
- **Adapted from**: The Regional Municipality of York (with permission)

### Legal Framework - Ontario, Canada
- **Health Protection and Promotion Act (HPPA)**: Provincial legislation governing food premises
- **Ontario Food Premises Regulation 493/17 (O. Reg. 493/17)**: Specific standards for food premises including cleaning, sanitizing, temperatures, handling, and hygiene
- **Peel Public Health**: Enforcement through Certified Public Health Inspectors (PHIs)

### Key Requirements Covered
- Over 6,500 food premises in Peel Region
- Risk-based inspections (high, moderate, low risk)
- Trained food handler must be on site during all operating hours
- Canadian temperature standards (4°C-60°C danger zone)
- 11 Canadian priority allergens (vs. 9 in US)
- Cooling requirements: 2-hour and 4-hour rules
- Ontario-specific cooking temperatures
- HACCP (Hazard Analysis Critical Control Point) principles
- Peel Inspections Disclosure website for public inspection results

### Ontario Food Handler Certification
In Ontario, food premises must ensure at least one trained food handler or supervisor is on site during all operating hours. This app provides practice materials aligned with Peel Public Health official requirements.

---

**Disclaimer**: This app is designed for educational and practice purposes only. While the content is based on the official Peel Public Health Food Handler Certification Study Guide (July 2023), this is NOT an official Peel Public Health training program and does NOT provide a valid Food Handler Certificate upon completion.

**To obtain your official Food Handler Certificate in Ontario, you must:**
- Complete an approved food handler training program
- Pass the official certification exam
- Requirements may vary by municipality and health unit
- Training must be completed within specified timeframes as required by local regulations

Always verify specific requirements with your local public health unit or Peel Public Health. Requirements may be updated, and this app may not reflect the most current regulations.

**For official Food Handler Certification in Peel Region:**
- **Peel Public Health**: 905-799-7700 or 1-888-919-7800 (toll-free)
- **TTY**: 1-888-919-7800
- **Website**: peelregion.ca
- **Inspections**: peelregion.ca/health/inspections

**Contact Information:**
- Peel Region Public Health
- Serving Mississauga, Brampton, and Caledon
- Ontario, Canada

---

*This document has been adapted with permission of The Regional Municipality of York.*
*Source: Peel Public Health - July 2023*
