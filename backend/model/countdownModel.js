import mongoose from 'mongoose'

const CountdownSchema = mongoose.Schema(
  {
    date: { type: Date, default: Date.now },
    amountOfDays: { type: Number },
    statusDisplay: { type: String },
    toDisplay: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

const Countdown = mongoose.model('Countdown', CountdownSchema)

export default Countdown
