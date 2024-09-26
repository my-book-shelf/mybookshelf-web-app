const mongoose = require('mongoose');
const workSchema = require('./work.model');
const editionSchema = require('./edition.model')

const shelfSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },  // Names like 'Reading', 'TBR', 'Finished'
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    books: [{ type: String, ref: 'Edition' }],
    isDeletable: { type: Boolean, default: false },
});

// Virtual field for dynamic link
shelfSchema.virtual('url').get(function() {
    return `/shelves/${this._id}/books`;
});

// Ensure virtual fields are serialized
shelfSchema.set('toJSON', { virtuals: true });
shelfSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Shelf', shelfSchema);
