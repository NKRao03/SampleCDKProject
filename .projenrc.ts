import { awscdk, javascript } from 'projen';

const project = new awscdk.AwsCdkTypeScriptApp({
  packageManager: javascript.NodePackageManager.PNPM,
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  entrypoint: 'src/EC2_instance_to_run_sample_scripts.ts',
  name: 'CDK',
  projenrcTs: true,
  tsconfig: {
    compilerOptions: {
      rootDir: '.',
      outDir: './lib',
      target: 'ES2020',
    },
  },
  deps: ['express', 'aws-lambda', 'aws-cdk', 'aws-sdk'] /* Runtime dependencies of this module. */,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    'projen',
    'jest',
    '@types/express',
    '@types/aws-lambda',
    '@types/node',
    '@types/aws-sdk',
    'nodemon',
    'ts-node',
  ] /* Build dependencies for this module. */,
  // packageName: undefined,  /* The "name" in package.json. */
});

project.tasks.addTask('start', {
  exec: 'ts-node src/services/demoService.ts',
  receiveArgs: true,
});

project.synth();
