import { useState } from "react";
import BasicSelect from "../BasicSelect";
import { useAlignments } from "./hooks/useAlignments";

export const Alignments = () => {

  // const alignments = [
	// 	{
	// 		"index": "chaotic-evil",
	// 		"name": "Chaotic Evil",
	// 		"url": "/api/alignments/chaotic-evil"
	// 	},
	// 	{
	// 		"index": "chaotic-good",
	// 		"name": "Chaotic Good",
	// 		"url": "/api/alignments/chaotic-good"
	// 	},
	// 	{
	// 		"index": "chaotic-neutral",
	// 		"name": "Chaotic Neutral",
	// 		"url": "/api/alignments/chaotic-neutral"
	// 	},
	// 	{
	// 		"index": "lawful-evil",
	// 		"name": "Lawful Evil",
	// 		"url": "/api/alignments/lawful-evil"
	// 	},
	// 	{
	// 		"index": "lawful-good",
	// 		"name": "Lawful Good",
	// 		"url": "/api/alignments/lawful-good"
	// 	},
	// 	{
	// 		"index": "lawful-neutral",
	// 		"name": "Lawful Neutral",
	// 		"url": "/api/alignments/lawful-neutral"
	// 	},
	// 	{
	// 		"index": "neutral",
	// 		"name": "Neutral",
	// 		"url": "/api/alignments/neutral"
	// 	},
	// 	{
	// 		"index": "neutral-evil",
	// 		"name": "Neutral Evil",
	// 		"url": "/api/alignments/neutral-evil"
	// 	},
	// 	{
	// 		"index": "neutral-good",
	// 		"name": "Neutral Good",
	// 		"url": "/api/alignments/neutral-good"
	// 	}
	// ]

  const { alignments } = useAlignments()
  console.log('me')
  console.log(alignments)
  return <BasicSelect options={alignments} placeholder={`Alignments`} />
}