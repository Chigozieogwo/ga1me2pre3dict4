import mongoose from 'mongoose'

const PredictionSchema = mongoose.Schema(
  {
    title: { type: String },
    isPublished: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
    fixture: [
      {
        date: { type: Date, default: Date.now },
        league: { type: String },
        home: { type: String },
        away: { type: String },
        tipsOdds: { type: String },
        result: {
          type: String,
          enum: ['Won', 'Loss', 'Cancelled', 'Postponed'],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Prediction = mongoose.model('Prediction', PredictionSchema)

export default Prediction
