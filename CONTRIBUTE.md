-----

### **Git Workflow Template**

A simple and consistent guide for Git branches and commit messages.

-----

### \#\# Branch Naming Convention

Use this format for all branches except **main**.

**Format:** `type/short-description`

  * **feat/**: A new feature.
      * `feat/user-authentication`
  * **fix/**: A bug fix.
      * `fix/login-form-validation`
  * **chore/**: Build, config, or dependency updates.
      * `chore/update-docker-image`
  * **docs/**: Changes to documentation.
      * `docs/add-api-guide`
  * **refactor/**: Code refactoring without changing functionality.
      * `refactor/simplify-payment-service`

-----

### \#\# Commit Message Format

Follow the **Conventional Commits** specification.

**Structure:**

```
<type>(<scope>): <subject>

[Optional body for more details]

[Optional footer for issues or BREAKING CHANGE]
```

#### **Header Rules**

  * **`type`**: `feat`, `fix`, `chore`, `docs`, `refactor`, `perf`, `test`.
  * **`scope` (optional)**: The part of the codebase being changed (e.g., `api`, `db`, `ui`).
  * **`subject`**:
      * Use imperative mood (e.g., "add feature" not "added feature").
      * Keep it short (max 50 characters).
      * Do not capitalize the first letter or end with a period.

-----

### **Commit Examples**

#### **Simple Feature**

```
feat(auth): implement user sign-up endpoint
```

#### **Fix with Details**

```
fix(api): prevent duplicate order submission

Add a server-side check to ensure that multiple clicks on the
"submit" button do not create duplicate orders in the database.
```

#### **Breaking Change**

```
refactor(auth): replace session IDs with JWTs

BREAKING CHANGE: All authenticated endpoints now require a
`Bearer` token in the `Authorization` header instead of a session cookie.
```