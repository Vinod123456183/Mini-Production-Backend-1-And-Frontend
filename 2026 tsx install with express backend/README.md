**Express + TypeScript Backend Setup**



**A beginner-friendly backend project using Node.js, Express, TypeScript, ts-node, and Nodemon.**



**This README documents the complete setup process and the issues encountered during development.**



**1. Project Overview**



**This project creates a simple Express backend using TypeScript.**



**The first endpoint is:**



**GET /**





**and returns:**



**Hello World**





**The development server runs on:**



**http://localhost:3000**



**2. Create the Project**



**Create the project folder and open it in the terminal.**



**mkdir 2026-tsx-install-with-express-backend**

**cd 2026-tsx-install-with-express-backend**





**Initialize npm:**



**npm init -y**





**This creates:**



**package.json**



**3. Install Express**



**Install Express as a production dependency:**



**npm install express**



**4. Install TypeScript**



**Install TypeScript as a development dependency:**



**npm install -D typescript**



**5. Install ts-node**



**ts-node allows us to run TypeScript files directly without manually compiling them first.**



**npm install -D ts-node**



**6. Install Type Definitions**



**Install Express types:**



**npm install -D @types/express**





**Install Node.js types:**



**npm install -D @types/node**





**Or both together:**



**npm install -D @types/express @types/node**



**7. Install Nodemon**



**Nodemon automatically restarts the server when files change.**



**npm install -D nodemon**



**8. Initialize TypeScript**



**Run:**



**npx tsc --init**





**This creates:**



**tsconfig.json**



**9. Configure tsconfig.json**



**Open:**



**tsconfig.json**





**Replace its contents with:**



**{**

&#x20; **"compilerOptions": {**

&#x20;   **"target": "ES2020",**

&#x20;   **"module": "commonjs",**

&#x20;   **"outDir": "./dist",**

&#x20;   **"rootDir": "./src",**

&#x20;   **"strict": true,**

&#x20;   **"esModuleInterop": true,**

&#x20;   **"skipLibCheck": true,**

&#x20;   **"forceConsistentCasingInFileNames": true**

&#x20; **}**

**}**



**Explanation**

**Option	Purpose**

**target	JavaScript version to compile to**

**module	Uses CommonJS modules**

**outDir	Compiled JavaScript goes into dist**

**rootDir	TypeScript source files are inside src**

**strict	Enables strict TypeScript checking**

**esModuleInterop	Makes imports such as Express easier**

**skipLibCheck	Skips checking declaration files**

**forceConsistentCasingInFileNames	Prevents casing-related file problems**

**10. Create the src Folder**



**Create:**



**src**





**Inside it, create:**



**src/index.ts**





**The structure becomes:**



**2026-tsx-install-with-express-backend/**

**│**

**├── src/**

**│   └── index.ts**

**│**

**├── node\_modules/**

**├── package-lock.json**

**├── package.json**

**└── tsconfig.json**



**11. Create index.ts**



**Open:**



**src/index.ts**





**Add:**



**import express from "express";**



**const app = express();**



**const PORT = 3000;**



**app.get("/", (req, res) => {**

&#x20; **res.send("Hello World");**

**});**



**app.listen(PORT, () => {**

&#x20; **console.log(`Server running on http://localhost:${PORT}`);**

**});**



**12. Configure package.json**



**Open:**



**package.json**





**Make sure the scripts section contains:**



**"scripts": {**

&#x20; **"dev": "nodemon src/index.ts",**

&#x20; **"test": "echo \\"Error: no test specified\\" \&\& exit 1"**

**}**



**Important**



**There must be a comma after:**



**"dev": "nodemon src/index.ts",**





**Without the comma, npm gives:**



**EJSONPARSE**

**Expected ',' or '}' after property value**



**13. Example package.json**



**A working package.json can look like:**



**{**

&#x20; **"name": "2026-tsx-install-with-express-backend",**

&#x20; **"version": "1.0.0",**

&#x20; **"description": "",**

&#x20; **"main": "index.js",**

&#x20; **"scripts": {**

&#x20;   **"dev": "nodemon src/index.ts",**

&#x20;   **"test": "echo \\"Error: no test specified\\" \&\& exit 1"**

&#x20; **},**

&#x20; **"keywords": \[],**

&#x20; **"author": "",**

&#x20; **"license": "ISC",**

&#x20; **"dependencies": {**

&#x20;   **"express": "^5.2.1"**

&#x20; **},**

&#x20; **"devDependencies": {**

&#x20;   **"@types/express": "^5.0.6",**

&#x20;   **"@types/node": "^22.20.2",**

&#x20;   **"nodemon": "^3.1.14",**

&#x20;   **"ts-node": "^10.9.2",**

&#x20;   **"typescript": "^5.9.3"**

&#x20; **}**

**}**





**The exact versions may differ depending on when the packages are installed.**



**14. Important: Do Not Paste Code into CMD**



**One of the mistakes encountered during setup was trying to paste TypeScript directly into the Windows Command Prompt.**



**For example, this should NOT be typed into CMD:**



**const app = express();**

**const PORT = 3000;**

**app.get("/", ...);**





**CMD will respond with:**



**'const' is not recognized as an internal or external command**





**These are TypeScript statements and belong inside:**



**src/index.ts**





**Similarly, JSON belongs inside files such as:**



**package.json**





**and:**



**tsconfig.json**



**15. Check TypeScript Configuration**



**Before starting the server, check the TypeScript project:**



**npx tsc --noEmit**





**If there are no errors, the TypeScript configuration is valid.**



**16. Start the Development Server**



**Run:**



**npm run dev**





**Nodemon should start:**



**\[nodemon] starting `ts-node src/index.ts`**





**Then the application should display:**



**Server running on http://localhost:3000**



**17. Test the API**



**Open your browser:**



**http://localhost:3000**





**Expected response:**



**Hello World**



**18. Problem Encountered: Invalid package.json**



**Initially, npm run dev produced:**



**npm error code EJSONPARSE**





**The problem was a missing comma in the scripts section.**



**Incorrect:**



**"scripts": {**

&#x20; **"dev": "nodemon src/index.ts"**

&#x20; **"test": "echo \\"Error: no test specified\\" \&\& exit 1"**

**}**





**Correct:**



**"scripts": {**

&#x20; **"dev": "nodemon src/index.ts",**

&#x20; **"test": "echo \\"Error: no test specified\\" \&\& exit 1"**

**}**





**After fixing the comma, npm was able to run the development script.**



**19. Problem Encountered: ts-node and TypeScript Version**



**After fixing package.json, the server started but ts-node crashed with:**



**TypeError: Cannot read properties of undefined (reading 'fileExists')**





**The important versions were:**



**ts-node     10.9.2**

**TypeScript  7.0.2**





**The issue is a compatibility problem between the older ts-node release and the newer TypeScript version.**



**20. Fix the TypeScript Version**



**Remove the current TypeScript version:**



**npm uninstall typescript**





**Install a compatible TypeScript 5.x version:**



**npm install -D typescript@5.9.3**





**Check the installed version:**



**npx tsc --version**





**Expected:**



**Version 5.9.3**





**Check ts-node:**



**npx ts-node --version**





**Expected:**



**v10.9.2**





**Then start the server:**



**npm run dev**



**21. Recommended Development Versions**



**For this project, the setup is:**



**Node.js       22.14.0**

**Express       5.x**

**TypeScript    5.9.3**

**ts-node       10.9.2**

**Nodemon       3.1.14**





**The important compatibility point is:**



**TypeScript 5.9.3**

&#x20;       **+**

**ts-node 10.9.2**





**rather than using TypeScript 7 with this version of ts-node.**



**22. Final Project Structure**



**At this stage, the project should look like:**



**2026-tsx-install-with-express-backend/**

**│**

**├── node\_modules/**

**│**

**├── src/**

**│   └── index.ts**

**│**

**├── package-lock.json**

**├── package.json**

**├── README.md**

**└── tsconfig.json**



**23. Complete Development Workflow**



**The setup flow is:**



**Create Project**

&#x20;     **↓**

**npm init -y**

&#x20;     **↓**

**Install Express**

&#x20;     **↓**

**Install TypeScript**

&#x20;     **↓**

**Install ts-node**

&#x20;     **↓**

**Install @types/express**

&#x20;     **↓**

**Install @types/node**

&#x20;     **↓**

**Install Nodemon**

&#x20;     **↓**

**npx tsc --init**

&#x20;     **↓**

**Create src/index.ts**

&#x20;     **↓**

**Configure tsconfig.json**

&#x20;     **↓**

**Configure package.json**

&#x20;     **↓**

**Check TypeScript**

&#x20;     **↓**

**npm run dev**

&#x20;     **↓**

**Open localhost:3000**

&#x20;     **↓**

**Hello World**



**24. Useful Commands**

**Install dependencies**

**npm install**



**Install TypeScript**

**npm install -D typescript**



**Install a specific TypeScript version**

**npm install -D typescript@5.9.3**



**Install ts-node**

**npm install -D ts-node**



**Install Nodemon**

**npm install -D nodemon**



**Install Express types**

**npm install -D @types/express**



**Install Node types**

**npm install -D @types/node**



**Check TypeScript version**

**npx tsc --version**



**Check ts-node version**

**npx ts-node --version**



**Check TypeScript without compiling**

**npx tsc --noEmit**



**Compile TypeScript**

**npx tsc**



**Start development server**

**npm run dev**



**25. Current Goal**



**The current goal of this project is to successfully run:**



**npm run dev**





**and receive:**



**Server running on http://localhost:3000**





**Then visiting:**



**http://localhost:3000**





**should return:**



**Hello World**



**26. Next Steps**



**After the basic server is working, the project can be extended with:**



**Express middleware**

**Environment variables**

**REST API routes**

**Controllers**

**Services**

**Error handling**

**MongoDB/PostgreSQL**

**Authentication**

**Validation**

**Production build**

**API testing**

**Deployment**

