import advancedSearch from './advancedSearch';
import fields from './fields';
import forms from './forms';
import vocabularies from './vocabularies';

export default () => pluginContext => ({
  recordTypes: {
    organization: {
      vocabularies,
      advancedSearch: advancedSearch(pluginContext),
      fields: fields(pluginContext),
      forms: forms(pluginContext),
    },
  },
});
