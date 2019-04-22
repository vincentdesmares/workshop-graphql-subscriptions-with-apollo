import React from 'react'

import Votes from './votes'

export default function Article({ article }) {
  return (
    <article className="bt bb b--black-10">
      <div className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
        <div className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              className="db"
              alt="Photo of a dimly lit room with a computer interface terminal."
            />
          </div>
          <div className="w-100 w-60-ns pl3-ns">
            <h1 className="f3 fw1 baskerville mt0 lh-title">{article.title}</h1>
            <p className="f6 f5-l lh-copy">
              The tech giant says it is ready to begin planning a quantum
              computer, a powerful cpu machine that relies on subatomic
              particles instead of transistors.
            </p>
            <div className="flex items-center justify-between">
              <p className="f6 lh-copy mv0">By {article.author}</p>
              <div>
                <Votes article={article} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
