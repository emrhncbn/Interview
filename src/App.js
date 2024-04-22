import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi:
        'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  })

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  )
}

const DisplayNested = ({ nestedObjected }) => {

const renderNestedObject = (obj) => (
  <ul>
    {/* Nesnenin anahtarlarını bir diziye dönüştür ve map ile dön */}
    {Object.keys(obj).map((key) => (
      <li key={key}>
        <strong>{key}:</strong>
        {/* Eğer anahtarın değeri bir nesne ise renderNestedObject fonksiyonunu tekrar çağır iç içe geçmiş nesneleri işle, anahtarın değeri nesne değilse, direkt olarak ekrana yazdır */}
        {typeof obj [key] === 'object' ? renderNestedObject(obj[key]) : obj[key]}

      </li>
    ))}
  </ul>
)
  return (
    // KODUNUZ BURAYA GELECEK
    <div>{renderNestedObject(nestedObjected)}</div>
  )
 
}

export default App
