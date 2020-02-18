import * as React from 'react'
import { Link } from 'gatsby'
import Img, { FluidObject } from "gatsby-image"
import PostDate from '../PostDate'
import styles from './BlogCard.module.css'
import classNames from 'classnames'
import FeaturedImage from '../FeaturedImage'

interface BlogCardProps {
  title: string
  slug: string
  description: string
  excerpt: string
  date: string
  categories?: readonly string[]
  featuredImage: FeaturedImage
}

const BlogCard: React.FC<BlogCardProps> = (props) =>
  <Link className={classNames(styles.card, styles.blogCard)} to={props.slug}>
    {props.featuredImage !== null && props.featuredImage !== undefined && <Img className={styles.cardImgContainer} fluid={props.featuredImage.data} alt={props.featuredImage.description} />}
    <article className={styles.cardBody}>
      <h2 className={styles.cardTitle}>{props.title}</h2>
      <p className={styles.cardText}>{props.description ?? props.excerpt}</p>
      <div className={classNames(styles.cardSubtext, 'muted-text')}>
        <PostDate date={props.date}></PostDate>
        <p>
          {props.categories?.map(x => `#${x}`)}
        </p>
      </div>
    </article>
  </Link>

export default BlogCard
