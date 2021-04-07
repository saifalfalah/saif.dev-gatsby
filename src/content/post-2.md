---
title: "Forgetting about .eslintcache in React"
date: "2021-04-07"
draft: false
path: "/blog/forgetting-about-eslintcache"
---

With the release of React 17 and React Scripts 4.0.1, we came across .eslintcache that was not in .gitignore by default. The file, although beneficial, was super annoying when trying to run commands like `git diff`. Since .gitignore comes first in alphabetical order, one had to go through the entire changes to the .gitignore file before getting to the files that one was actually concerned about. After months of grappling with this annoying file, I decided to get rid of it once and for all.

Here, I document the steps:

### Step 1
Add `.eslintcache` to `.gitignore` so that git no longer tracks it.

### Step 2
Now we just need to remove this file from our current working directory as well as from origin. For this, we run:

```bash
git rm --cached .eslintcache
```

And viola, the .eslintcache has been removed for git forever.

---
References

1. https://stackoverflow.com/questions/1274057/how-to-make-git-forget-about-a-file-that-was-tracked-but-is-now-in-gitignore

2. https://stackoverflow.com/questions/1274057/how-to-make-git-forget-about-a-file-that-was-tracked-but-is-now-in-gitignore