import React from 'react'
import NutritionScore from '../score_item/NutritionScore'
import calories from '../../assets/icons_scorebar/calories.png'
import carbs from '../../assets/icons_scorebar/carbs.png'
import fat from '../../assets/icons_scorebar/fat.png'
import protein from '../../assets/icons_scorebar/protein.png'

export default function ScoreBar({ score }) {

  return (
    <div>
        <NutritionScore item={score.calories.value} icon={calories} name="Calories" measure={score.calories.unit} />
        <NutritionScore item={score.protein.value} icon={protein} name="Proteines" measure={score.protein.unit} />
        <NutritionScore item={score.carbs.value} icon={carbs} name="Clucides" measure={score.carbs.unit} />
        <NutritionScore item={score.fat.value} icon={fat} name="Lipides" measure={score.fat.unit} />
    </div>
  )
}
