import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TermPickerInput,
    DateInput,
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      AuthBy: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.cinefilesUOCApprovalStatus.AuthBy.name',
              defaultMessage: 'Authorized by',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local,person/shared,organization/local,organization/shared,organization/committee',
              showQuickAdd: false,
            },
          },
        },
      },
      AuthStatus: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.cinefilesUOCApprovalStatus.AuthStatus.name',
              defaultMessage: 'Authorization status',
            },
          }),
          view: {
            type: TermPickerInput,
            props: {
              source: 'uocauthorizationstatuses',
            },
          },
        },
      },
      StartDate: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.cinefilesUOCApprovalStatus.StartDate.name',
              defaultMessage: 'Earliest requested date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
      EndDate: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.cinefilesUOCApprovalStatus.EndDate.name',
              defaultMessage: 'Latest requested date',
            },
          }),
          view: {
            type: DateInput,
          },
        },
      },
    },
  };
};
