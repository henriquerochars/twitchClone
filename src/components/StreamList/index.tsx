import React from 'react'

import streamThumbnail from '../../images/stream_thumbnail.jpg'

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamAvatar,
  StreamHeader,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagViews,
  TagText,
} from './styles'

function StreamList() {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>henrique_rochars</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Backend com NodeJs
          </StreamDescription>
          <StreamCategory>Science</StreamCategory>
        </StreamRow>

        <TagRow>
          <TagViews>
            <TagText>NodeJs</TagText>
          </TagViews>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  )
}

export default StreamList
