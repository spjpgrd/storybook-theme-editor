# Contributing to Storybook Theme Editor

Thank you for your interest in contributing to the Storybook Theme Editor! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Reporting Issues](#reporting-issues)
- [Feature Requests](#feature-requests)

## Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inspiring community for all. By participating, you agree to uphold this code.

### Our Standards

- **Be respectful and inclusive**: Use welcoming and inclusive language
- **Be collaborative**: Work together to resolve conflicts and assume good intentions
- **Be patient**: Remember that people have varying communication styles and that not everyone is using their native language
- **Be constructive**: Focus on what is best for the community

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- A GitHub account

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then clone your fork
   git clone https://github.com/spjpgrd/storybook-theme-editor.git
   cd storybook-theme-editor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## How to Contribute

### Types of Contributions

We welcome several types of contributions:

- 🐛 **Bug fixes**: Fix issues and improve stability
- ✨ **New features**: Add new functionality to the editor
- 📚 **Documentation**: Improve README, code comments, and guides
- 🎨 **UI/UX improvements**: Enhance the user interface and experience
- 🔧 **Performance optimizations**: Improve speed and efficiency
- 🧪 **Tests**: Add or improve test coverage
- 🌐 **Internationalization**: Add support for new languages

### Contribution Workflow

1. **Check existing issues**: Look for open issues that match your interests
2. **Create a new issue**: If you have a new idea, create an issue first to discuss it
3. **Fork and branch**: Create a feature branch from `main`
4. **Make changes**: Implement your changes following our coding standards
5. **Test your changes**: Ensure everything works as expected
6. **Submit a pull request**: Create a PR with a clear description

## Pull Request Process

### Before Submitting

- [ ] I have read and followed the coding standards
- [ ] I have tested my changes locally
- [ ] I have updated documentation if needed
- [ ] My changes don't introduce new warnings or errors
- [ ] I have added tests for new functionality (if applicable)

### Pull Request Template

When creating a pull request, please include:

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] I have tested this change locally
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
```

## Coding Standards

### TypeScript/React Standards

- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Use functional components over class components
- Prefer `const` over `let`, avoid `var`
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### Code Style

- Use Prettier for code formatting (configured in the project)
- Follow ESLint rules (configured in the project)
- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in objects and arrays

### File Organization

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── styles/             # Global styles and themes
```

### Component Guidelines

- Keep components small and focused on a single responsibility
- Use TypeScript interfaces for props
- Extract reusable logic into custom hooks
- Use meaningful prop names and provide default values when appropriate

Example component structure:
```typescript
interface ComponentProps {
  title: string;
  isVisible?: boolean;
  onToggle: () => void;
}

export const Component: React.FC<ComponentProps> = ({
  title,
  isVisible = false,
  onToggle
}) => {
  // Component logic here

  return (
    <div>
      {/* JSX here */}
    </div>
  );
};
```

## Testing

### Manual Testing

Before submitting a PR, please test:

- [ ] All existing functionality still works
- [ ] New features work as expected
- [ ] UI changes look good on different screen sizes
- [ ] Color picker functionality works correctly
- [ ] Export functionality generates valid themes
- [ ] Theme switching (light/dark) works properly

### Browser Testing

Test your changes in:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## Documentation

### Code Documentation

- Add JSDoc comments for functions and complex logic
- Use clear, descriptive variable and function names
- Add inline comments for complex algorithms

### README Updates

If your changes affect:
- Installation process
- Usage instructions
- Available features
- Configuration options

Please update the README.md accordingly.

## Reporting Issues

### Before Creating an Issue

1. **Search existing issues**: Check if the issue has already been reported
2. **Check the documentation**: Make sure the issue isn't covered in the README
3. **Try the latest version**: Ensure you're using the most recent code

### Creating a Good Issue

Use our [bug report template](.github/ISSUE_TEMPLATE/bug_report.yml) and include:

- Clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Browser and OS information
- Screenshots if applicable
- Console errors if any

## Feature Requests

### Before Requesting a Feature

1. **Check existing issues**: Look for similar feature requests
2. **Consider the scope**: Is this feature within the project's goals?
3. **Think about implementation**: Consider how complex the feature would be

### Making a Good Feature Request

Use our [feature request template](.github/ISSUE_TEMPLATE/feature_request.yml) and include:

- Clear description of the feature
- Use cases and examples
- Mockups or wireframes if applicable
- Priority level
- Any implementation ideas you have

## Getting Help

If you need help:

1. **Check the documentation**: Start with the README
2. **Search existing issues**: Look for similar questions
3. **Ask a question**: Use our [question template](.github/ISSUE_TEMPLATE/question.yml)
4. **Join discussions**: Use GitHub Discussions for general questions

## Recognition

Contributors will be recognized in:
- The project's README
- Release notes for significant contributions
- GitHub's contributor graph

## License

By contributing to this project, you agree that your contributions will be licensed under the same MIT License that covers the project.

---

Thank you for contributing to the Storybook Theme Editor! 🎨✨
