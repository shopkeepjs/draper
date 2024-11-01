// Import necessary modules
const fs = require('fs');
const path = require('path');

// Function to copy directory recursively
const copyDirectory = (source, destination, componentName) => {
	if (!fs.existsSync(destination)) {
		fs.mkdirSync(destination, { recursive: true });
	}

	const entries = fs.readdirSync(source, { withFileTypes: true });

	for (const entry of entries) {
		const srcPath = path.join(source, entry.name);
		let destPath = path.join(destination, entry.name);

		if (entry.isDirectory()) {
			copyDirectory(srcPath, destPath, componentName);
		} else {
			// Rename files if they contain 'Template'
			if (entry.name.includes('Template')) {
				destPath = path.join(destination, entry.name.replace('Template', componentName));
			}
			fs.copyFileSync(srcPath, destPath);
		}
	}
};

// Function to replace content in files
const replaceContentInFiles = (dir, originalString, newString) => {
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const entryPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			replaceContentInFiles(entryPath, originalString, newString);
		} else {
			let content = fs.readFileSync(entryPath, 'utf-8');
			const updatedContent = content.split(originalString).join(newString);
			fs.writeFileSync(entryPath, updatedContent, 'utf-8');
		}
	}
};

// Function to update elementNames in constants.ts
const updateElementNames = (componentName) => {
	const constantsPath = path.join(__dirname, '..', 'src', 'lib', 'constants', 'constants.ts');
	if (fs.existsSync(constantsPath)) {
		let content = fs.readFileSync(constantsPath, 'utf-8');
		const elementNamesRegex = /export const elementNames = \[(.*?)\]/s;
		const match = content.match(elementNamesRegex);
		if (match) {
			const existingElements = match[1].trim();
			const updatedElements =
				existingElements.length > 0
					? `${existingElements}, '${componentName}'`
					: `'${componentName}'`;
			content = content.replace(
				elementNamesRegex,
				`export const elementNames = [${updatedElements}]`
			);
			fs.writeFileSync(constantsPath, content, 'utf-8');
		}
	}
};

// Main function to run the CLI tool
const main = () => {
	const userArgs = process.argv.slice(2);
	if (userArgs.length < 1) {
		console.error('Please provide a name for the new component directory.');
		process.exit(1);
	}

	const componentName = userArgs[0];
	const templateDir = path.join(__dirname, 'Template');
	const destinationDir = path.join(__dirname, '..', 'src', 'lib', 'components', componentName);

	try {
		// Copy the template directory to the new location
		copyDirectory(templateDir, destinationDir, componentName);

		// Replace all instances of 'Template' in the copied files with the user-provided name
		replaceContentInFiles(destinationDir, 'Template', componentName);

		// Update elementNames in constants.ts
		updateElementNames(componentName);

		console.log(
			`Component '${componentName}' has been created successfully in 'src/components/lib/${componentName}'.`
		);
	} catch (error) {
		console.error('An error occurred:', error);
	}
};

main();
