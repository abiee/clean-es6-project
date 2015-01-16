var testsContext = require.context('./spec', true, /Spec$/);
testsContext.keys().forEach(testsContext);
