import React from 'react'
import NutritionScore from '../score_item/NutritionScore'
import calories from '../../assets/icons_scorebar/calories.png'
import carbs from '../../assets/icons_scorebar/carbs.png'
import fat from '../../assets/icons_scorebar/fat.png'
import protein from '../../assets/icons_scorebar/protein.png'

export default function ScoreBar({ score }) {
  return (
    <div>
        <NutritionScore item={score.calorieCount} icon={calories} name="Calories"/>
        <NutritionScore item={score.proteinCount} icon={protein} name="Proteines" />
        <NutritionScore item={score.carbohydrateCount} icon={carbs} name="Clucides" />
        <NutritionScore item={score.lipidCount} icon={fat} name="Lipides" />
    </div>
  )
}
