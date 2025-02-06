import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column} from '@adonisjs/lucid/orm'
import Quiz from "#models/quiz";
import type {BelongsTo} from "@adonisjs/lucid/types/relations";

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare question: string

  @column()
  declare correctAnswer: string

  @column()
  declare idQuiz: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo (() => Quiz)
  declare quiz: BelongsTo<typeof Quiz>
}
