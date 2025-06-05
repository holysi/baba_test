import { QuestionSet } from '../types';

export const questionSets: Record<string, QuestionSet> = {
  'ChangChihLun': {
    id: 'ChangChihLun',
    questions: [
      {
        id: 'q1',
        text: '你剛當選立委，第一次進入立法院，看到一群記者衝上來要採訪你，你會？',
        image: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg',
        description: '初次進入立法院，面對媒體關注是每位新科立委必經的挑戰。這不僅考驗著立委的應變能力，也是展現個人特色的重要時刻。你的回應將決定未來媒體對你的觀感，以及公眾對你的第一印象。選擇要謹慎，因為這可能影響你未來的政治生涯。',
        options: [
          {
            id: 'q1_a1',
            text: '大方接受採訪，表達為民服務的決心',
            points: 10,
            isCorrect: true
          },
          {
            id: 'q1_a2',
            text: '躲避記者，快步走進議場',
            points: 5,
            isCorrect: false
          }
        ]
      },
      {
        id: 'q2',
        text: '立法院正在審查一項重要法案，但你發現自己對這個議題並不熟悉，你會？',
        image: 'https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg',
        description: '法案審查是立委的重要職責，每個決定都可能影響thousands of人民的生活。面對不熟悉的議題，如何在有限時間內做出正確判斷，考驗著立委的專業素養和責任心。這個時刻的選擇，將展現你是否真正重視立委的職責。',
        options: [
          {
            id: 'q2_a1',
            text: '向同黨資深立委請教，了解議題重點',
            points: 15,
            isCorrect: true
          },
          {
            id: 'q2_a2',
            text: '跟著黨團的決定投票',
            points: 20,
            isCorrect: false
          }
        ]
      },
      {
        id: 'q3',
        text: '有民眾到服務處陳情，反映地方建設落後的問題，你會？',
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
        description: '民眾陳情是立委服務處最常見的情況，也是了解地方需求的重要管道。如何有效處理民眾陳情，既要顧及實際可行性，又要維持民眾對政府的信任。這是檢視立委是否真正為民服務的關鍵時刻。',
        options: [
          {
            id: 'q3_a1',
            text: '認真聆聽，並承諾會反映給相關單位',
            points: 10,
            isCorrect: true
          },
          {
            id: 'q3_a2',
            text: '請助理記錄下來，表示會研究辦理',
            points: 25,
            isCorrect: false
          }
        ]
      }
    ]
  },
  'LINTEFU': {
    id: 'LINTEFU',
    questions: [
      {
        id: 'q1',
        text: '在立法院質詢時，你發現官員的回答模糊不清，你會？',
        image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
        description: '質詢是立委監督行政部門的重要工具，如何有效運用質詢時間，讓官員正面回應問題，是考驗立委問政能力的關鍵。這個時刻不僅關係到議題的釐清，也影響著行政部門的施政方向。',
        options: [
          {
            id: 'q1_a1',
            text: '追問到底，要求具體答覆',
            points: 15,
            isCorrect: true
          },
          {
            id: 'q1_a2',
            text: '改問下一個問題',
            points: 30,
            isCorrect: false
          }
        ]
      }
    ]
  }
};