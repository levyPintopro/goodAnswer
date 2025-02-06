import { DateTime } from 'luxon'
import {BaseModel, column, hasMany} from '@adonisjs/lucid/orm'
import type {HasMany} from "@adonisjs/lucid/types/relations";
import  Question from "#models/question";

export default class Quiz extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare minimumScore: number

  @column()
  declare successMessage: string

  @column()
  declare failure_message: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Question)
  declare questions : HasMany<typeof Question>
}
