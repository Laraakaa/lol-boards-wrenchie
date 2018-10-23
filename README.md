# lol-boards-wrenchie
Wrenchie - LoL Boards Assistant

## Install development version (very early alpha):
1. Clone or download this repository
2. In Chrome, navigate to chrome://extensions
3. Enable DevMode in the upper right corner
4. Select "Load unpacked extension"
5. Select the root folder of this git repo (where the manifest.json is in)

## Configuring
After the installation, you should see a new icon on the right side of the search bar. Click it -> Options.
You should be greeted with a popup stating that the forms were loaded successfully.

## Feature: MessageFormat [DONE]
Enter here a message that will be used as template (prefilled into every comment area in the boards). You can use the placeholder
%CURSOR% to auto-focus the textarea and place the cursor there. This could save you a click.

## Feature: Cache Support Forms [PARTIALLY: Insert missing]
This automatically loads current active articles from the riot games support and shows them, including ID. Later on, it will be
possible to directly insert a link.

## Feature: Create Custom Text Snippets [TODO]
Create text snippets, like FAQ answers that are either:
- Stored on a central server for easier distribution
- Stored on your own machine for your personal preference
They can easily be inserted into a text area in the boards.
