import React from 'react';
import ReactMarkdown from 'react-markdown';
import Progress from './Progress';
import './markdown-template.css';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface IMarkdownRender {
	data: string;
	isLoading: boolean;
}

export default function MarkdownRender({data , isLoading}: IMarkdownRender) {
	return (
		<div style={{ color: 'white' , paddingTop: '10px'}}>
			{!isLoading ? <Progress /> : 
				<article className="markdown-body-dark">
					<ReactMarkdown 
						children={data}
						remarkPlugins={[[remarkGfm , { singleTilde: false }]]}
						rehypePlugins={[rehypeRaw]}
						components={{
							code({ className , children })  {
								const language = className?.replace("language-", "");
								return (
										<SyntaxHighlighter
											class="devoong-cd-block"
											style={darcula}
											language={language}
											children={children[0]}
											showLineNumbers={true}
										/>
								);
							},
						}}
					/>
				</article>
			}
		</div>
	);
}