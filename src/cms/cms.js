import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import BlogListPagePreview from './preview-templates/BlogListPagePreview'
import BlogPagePreview from './preview-templates/BlogPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import IntroductionPagePreview from './preview-templates/IntroductionPagePreview'
import CourtLawPagePreview from './preview-templates/CourtLawPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('blog-index', BlogListPagePreview)
CMS.registerPreviewTemplate('blog', BlogPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('introduction', IntroductionPagePreview)
CMS.registerPreviewTemplate('court-law', CourtLawPagePreview)
