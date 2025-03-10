"use client"

export default function WritingSection() {
  const articles = [
    {
      year: "2024",
      date: "21/05",
      title: "Building a Mini-ITX PC with Teenage Engineering Computer-1 and Apple Studio Display",
      views: 5916
    },
    {
      year: "2023",
      date: "06/10",
      title: "Almanya'dan Hollanda'ya taşındım",
      views: 55765
    },
    {
      year: "2022",
      date: "04/12",
      title: "Optimizing Website Speed with Preload, Prefetch, Preconnect, and DNS Prefetch",
      views: 53223
    },
    {
      year: "",
      date: "06/10",
      title: "Almanya'da 2 yıl",
      views: 54133
    },
    {
      year: "2020",
      date: "30/12",
      title: "2020 — Year in review",
      views: 45582
    },
    {
      year: "",
      date: "24/11",
      title: "Bir yazılımcı olarak Türkiye'den gitmek",
      views: 51404
    },
    {
      year: "",
      date: "28/05",
      title: "Phone setup",
      views: 42851
    },
    {
      year: "",
      date: "24/05",
      title: "useFetch: A Custom React Hook",
      views: 48730
    }
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">Writing</h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-left text-base font-medium text-gray-700 w-24">Year</th>
              <th className="py-3 text-left text-base font-medium text-gray-700 w-24">Date</th>
              <th className="py-3 text-left text-base font-medium text-gray-700 flex-1">Title</th>
              <th className="py-3 text-left text-base font-medium text-gray-700 w-24">Views</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, index) => (
              <tr 
                key={index} 
                className="border-b transition-all duration-200 hover:bg-gray-50 hover:scale-[1.01]"
              >
                <td className="py-3 text-gray-900">{article.year}</td>
                <td className="py-3 text-gray-900">{article.date}</td>
                <td className="py-3 text-gray-900">{article.title}</td>
                <td className="py-3 text-gray-900 text-right">{article.views.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}