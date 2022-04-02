import React from 'react';
import ReactMarkdown from 'react-markdown';
import Progress from './Progress';
import './markdown-template.css';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkSlug from 'remark-slug';

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
						remarkPlugins={[remarkGfm , remarkSlug , remarkToc]}
						rehypePlugins={[rehypeRaw]}
						components={{
							code({ className , children })  {
								const language = className?.replace("language-", "");
								return (
										<SyntaxHighlighter
											className="devoong-cd-block"
											style={duotoneDark}
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