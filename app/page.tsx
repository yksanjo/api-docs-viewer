'use client'

import { useState } from 'react'
import { Book, ChevronRight, Copy, Check, ExternalLink } from 'lucide-react'

const docs = [
  {
    name: 'JSONPlaceholder',
    url: 'https://jsonplaceholder.typicode.com/',
    desc: 'Fake Online REST API',
    endpoints: [
      { method: 'GET', path: '/posts', desc: 'Get all posts' },
      { method: 'GET', path: '/posts/1', desc: 'Get single post' },
      { method: 'POST', path: '/posts', desc: 'Create post' },
      { method: 'PUT', path: '/posts/1', desc: 'Update post' },
      { method: 'DELETE', path: '/posts/1', desc: 'Delete post' },
    ]
  },
  {
    name: 'PokeAPI',
    url: 'https://pokeapi.co/docs/v2',
    desc: 'Pokemon REST API',
    endpoints: [
      { method: 'GET', path: '/pokemon', desc: 'List Pokemon' },
      { method: 'GET', path: '/pokemon/{name}', desc: 'Get Pokemon' },
      { method: 'GET', path: '/type/{id}', desc: 'Get type' },
      { method: 'GET', path: '/ability/{id}', desc: 'Get ability' },
      { method: 'GET', path: '/berry/{id}', desc: 'Get berry' },
    ]
  },
  {
    name: 'Cat Facts',
    url: 'https://catfact.ninja/',
    desc: 'Random Cat Facts',
    endpoints: [
      { method: 'GET', path: '/facts', desc: 'Get facts' },
      { method: 'GET', path: '/fact', desc: 'Get random fact' },
      { method: 'GET', path: '/breeds', desc: 'Get breeds' },
      { method: 'GET', path: '/breeds/{breed}', desc: 'Get breed' },
    ]
  },
  {
    name: 'CoinGecko',
    url: 'https://www.coingecko.com/en/api/documentation',
    desc: 'Crypto Prices API',
    endpoints: [
      { method: 'GET', path: '/coins/markets', desc: 'Market data' },
      { method: 'GET', path: '/coins/{id}', desc: 'Coin details' },
      { method: 'GET', path: '/simple/price', desc: 'Simple price' },
      { method: 'GET', path: '/trending', desc: 'Trending coins' },
    ]
  },
]

const methodColors: Record<string, string> = {
  GET: 'text-green-400 bg-green-400/10',
  POST: 'text-yellow-400 bg-yellow-400/10',
  PUT: 'text-blue-400 bg-blue-400/10',
  DELETE: 'text-red-400 bg-red-400/10',
}

export default function Home() {
  const [selected, setSelected] = useState(docs[0])
  const [copied, setCopied] = useState('')

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(text)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <header className="border-b border-border bg-bg-secondary/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold font-mono flex items-center gap-2">
            <Book className="w-5 h-5 text-accent-primary" />
            <span className="text-accent-primary">API</span> Docs Viewer
          </h1>
          <a href="https://github.com" className="text-text-muted hover:text-accent-primary text-sm">GitHub</a>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-bg-secondary min-h-[calc(100vh-65px)] p-4">
          <h2 className="text-xs text-text-muted uppercase tracking-wider mb-3">APIs</h2>
          <nav className="space-y-1">
            {docs.map(d => (
              <button key={d.name} onClick={() => setSelected(d)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition ${
                  selected.name === d.name ? 'bg-accent-primary/10 text-accent-primary' : 'text-text-secondary hover:bg-bg-tertiary'
                }`}>
                <ChevronRight className={`w-4 h-4 ${selected.name === d.name ? '' : 'opacity-0'}`} />
                {d.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
                <p className="text-text-secondary">{selected.desc}</p>
              </div>
              <a href={selected.url} target="_blank" rel="noopener"
                className="flex items-center gap-2 px-4 py-2 bg-bg-tertiary border border-border rounded-lg text-sm hover:border-accent-primary">
                Official Docs <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Base URL */}
            <div className="bg-bg-tertiary border border-border rounded-lg p-4 mb-8">
              <h3 className="text-sm text-text-muted mb-2">Base URL</h3>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-bg-secondary px-4 py-2 rounded font-mono text-sm">
                  {selected.url.replace('docs/v2', '').replace('documentation', '').replace('/', '')}
                </code>
                <button onClick={() => copy(selected.url)} className="p-2 hover:text-accent-primary">
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Endpoints */}
            <h3 className="text-lg font-semibold mb-4">Endpoints</h3>
            <div className="space-y-3">
              {selected.endpoints.map((ep, i) => (
                <div key={i} className="bg-bg-tertiary border border-border rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono ${methodColors[ep.method]}`}>{ep.method}</span>
                    <code className="font-mono text-sm">{ep.path}</code>
                  </div>
                  <p className="text-text-muted text-sm">{ep.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
