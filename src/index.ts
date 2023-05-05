const ALCHEMY_ANALYTICS_URL = `https://analytics.alchemyapi.io/analytics`

export default class AlchemyBadge {
  _intervalId: number | null = null
  _badgeId = ''
  _alchemyUrl = ''

  constructor(badgeId: string) {
    this._badgeId = badgeId
    this._alchemyUrl = `https://alchemyapi.io/?r=badge:${badgeId}`
    this._intersectionObserving()
  }

  logBadgeClick = () => {
    if (!this._badgeId) {
      throw 'BADGE_ID must be initialized before calling logBadgeClick'
    }
    fetch(`${ALCHEMY_ANALYTICS_URL}/badge-click`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        badge_id: this._badgeId
      })
    })
    window.open(this._alchemyUrl, '_blank')?.focus()
  }

  _intersectionObserving() {
   this._intervalId = setInterval(() => {
      const badge = document.getElementById('badge-button');
      if (badge && this._isBadgeInViewpoint(badge.getBoundingClientRect())) {
        this._logBadgeView();
        clearInterval(this._intervalId!);
      }
    }, 2000);
  }

  _logBadgeView() {
    fetch(`${ALCHEMY_ANALYTICS_URL}/badge-view`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        badge_id: this._badgeId
      })
    })
  }

  _isBadgeInViewpoint(bounding: any) {
    return (
      bounding.top >= 0
      && bounding.left >= 0
      && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
}
