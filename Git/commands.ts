## **1. Setup & Config**

```bash
git config --global user.name "Your Name"       # Set username
git config --global user.email "you@example.com" # Set email
git config --list                               # View all configs
```

---

## **2. Repository Basics**

```bash
git init              # Initialize a new repo
git clone <url>       # Clone an existing repo
git status            # Show file status
git add <file>        # Stage specific file
git add .             # Stage all changes
git commit -m "msg"   # Commit staged changes
git log               # View commit history
git diff              # Show unstaged changes
git diff --staged     # Show staged changes
```

---

## **3. Branching**

```bash
git branch                     # List local branches
git branch -a                   # List all (local + remote)
git checkout -b <branch>        # Create & switch branch
git switch -c <branch>          # (Newer syntax) Create & switch
git checkout <branch>           # Switch to branch
git merge <branch>              # Merge into current branch
git branch -d <branch>          # Delete local branch
git push origin --delete <branch> # Delete remote branch
```

---

## **4. Remote**

```bash
git remote -v                        # List remote URLs
git remote add origin <url>          # Add new remote
git push -u origin <branch>          # Push new branch & set upstream
git pull                             # Fetch + merge changes from remote
git fetch                            # Fetch changes without merge
```

---

## **5. Undo & Reset**

```bash
git restore <file>                   # Discard unstaged changes
git reset <file>                     # Unstage file
git reset --hard HEAD                # Reset everything to last commit
git revert <commit>                  # Create new commit to undo given commit
```

---

## **6. Stash (Temporary Save)**

```bash
git stash            # Save changes without committing
git stash list       # List stashes
git stash apply      # Apply last stash
git stash drop       # Delete last stash
```

---

💡 **Quick Example Workflow**

```bash
git clone <repo-url>                 # Get repo
git checkout -b feature/new-ui       # Create & switch to branch
... make changes ...
git add .                            # Stage changes
git commit -m "Add new UI"           # Commit changes
git push -u origin feature/new-ui    # Push branch to remote
```
