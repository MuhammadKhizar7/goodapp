import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import PlayerPagePreview from './preview-templates/PlayerPagePreview'
import PlayersPagePreview from './preview-templates/PlayersPagePreview'
import NewsPagePreview from './preview-templates/NewsPagePreview'
import NewsListPagePreview from './preview-templates/NewsListPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('player', PlayerPagePreview)
CMS.registerPreviewTemplate('players', PlayersPagePreview)
CMS.registerPreviewTemplate('news', NewsPagePreview)
CMS.registerPreviewTemplate('news-index', NewsListPagePreview)
