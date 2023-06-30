const InvariantError = require('../../exceptions/InvariantError');
const { NotePayloadSchema } = require('./schema');

const NoteValidator = {
    validateNotePayload: (payload) => {
        const validationResult = NotePayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new InvariantError(validationResult.error);
        }
    },
};

module.exports = NoteValidator;
