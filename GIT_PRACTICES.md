# 🧩 Git Workflow for Developers

This guide outlines the recommended Git practices for collaborating on the Accentrex Web project. Following these conventions ensures a clean, organized, and efficient development process.

---

## 📁 Branching Conventions

- **Branch Naming Format:**
  - `feat/feature-name` – For new features (e.g., `feat/signup-form`)
  - `fix/bug-description` – For bug fixes (e.g., `fix/navbar-overlap`)
  - `hotfix/urgent-issue` – For urgent production fixes
  - `chore/task-name` – For non-functional tasks (e.g., `chore/update-readme`)
  - `refactor/code-area` – For code improvements without feature changes

- **Target Branches:**
  - All PRs should be merged into `dev`.
  - Only `dev` is merged to `main` when ready for production or demo.

---

## ✅ Commit Best Practices

- Use short, imperative messages in present tense.
  - ✅ `Add login button behavior`
  - ❌ `Added login button behavior`
- Group related changes into a single commit.
- Use clear prefixes:
  - `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`, `test:`
- **Examples:**
  - `feat: add search bar functionality`
  - `fix: correct typo in footer`
  - `refactor: simplify header logic`

---

## 📥 Pull Request Format

Each PR must include:
- **A clear title:**
  - Example: `feat: implement user registration`
- **A short description:**
  - What was added/changed?
  - Any known issues?
  - Related Trello task or issue link (if any)
- **A checklist if needed**

**Reviewers are encouraged to:**
- Ask questions or request changes politely.
- Approve only after testing or confirming the code’s behavior.

---

## 👨‍💻 Frontend Developers
- Create a new branch for every feature: `git checkout -b feat/login-page`
- Pull latest changes from `dev` regularly: `git pull origin dev`
- Push your branch: `git push origin feat/login-page`
- Open a Pull Request (PR) to `dev`, and request a review.
- Merge after peer review or testing.
- Keep commits atomic and meaningful.

## 🧑‍💻 Backend Developers
- Create a branch per feature/module: `git checkout -b feat/user-auth`
- Pull updates from `dev` before working: `git pull origin dev`
- Document database or API changes in the PR.
- Push code regularly to avoid major conflicts.

---

## 🔄 Shared Rules
- Always start with `git pull origin dev` before you work.
- Use consistent branch naming (e.g., `feat/`, `fix/`, `hotfix/`).
- Never commit directly to `main` or `dev` unless authorized.
- Test locally before pushing.
- Keep pull requests small and focused.

---

## 📋 Pull Request Template

```
## 📌 Title
<!-- Example: feat: implement user registration form -->

## 📝 Description
- What does this PR do?
- Why is it necessary?
- What parts of the codebase are affected?

## ✅ Checklist
- [ ] Code compiles and runs without errors
- [ ] All features implemented are functional
- [ ] No UI/UX glitches (for frontend work)
- [ ] No breaking changes introduced (for backend work)
- [ ] Relevant code is commented and documented
- [ ] PR is rebased with `dev` and up to date

## 📸 Screenshots (if applicable)
<!-- Add screenshots or screen recordings to show changes visually -->

## 🔍 Testing Instructions
<!-- Provide clear steps on how to test this manually -->

## 💬 Notes (optional)
<!-- Add anything relevant: known issues, next steps, blockers, etc. -->
```

---

Following these practices will help keep the project organized, maintainable, and easy for all contributors to collaborate effectively.
