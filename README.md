# Speech Recognition

Hi 🙂 Please go through the below steps to contribute.

## Cloning the project

First of all clone the project using git clone command or using the github desktop client.


```bash
# create a new folder and inside the folder open a new git Bash & do
git clone https://github.com/sameert89/SpeechRecognitionIEEE/

# once the project is cloned inside the bash do
npm install

# once all the dependencies are installed you can go ahead and do
code .

# This will launch vscode with the folder in it.
```

## Developing

Once the cloning part is done. You can do the below to run the app in dev environment.

```bash
npm run dev -- --open
```

## Commiting & adding stuff

If you followed above steps, then vscode should be open by now.
Before you edit stuff always make sure to run 

```bash
git pull origin master
```
This will sync your code with the one from the repository. Then you may edit the files.
Since this is a single page app, all the edits will be done in routes/+page.svelte.
After finishing editing you can save the files and do the following to update the repo.

```bash
git add .

git commit -m "Comment what you did in the commit"

git push origin master
```
