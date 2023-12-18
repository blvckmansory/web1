'use client'

import { DOWNLOAD_LINK_CONFIG } from '~/shared/config/download-link'

const getAppStoreUrl = () => {
	if (typeof window === 'undefined') {
		return DOWNLOAD_LINK_CONFIG.android.href
	}
	// @ts-expect-error
	const userAgent = navigator.userAgent || navigator.vendor || window.opera

	if (/huawei/i.test(userAgent)) {
		return DOWNLOAD_LINK_CONFIG.huawei.href
	}
	if (/android/i.test(userAgent)) {
		return DOWNLOAD_LINK_CONFIG.android.href
	}
	// @ts-expect-error
	if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
		return DOWNLOAD_LINK_CONFIG.ios.href
	}

	return DOWNLOAD_LINK_CONFIG.android.href
}

export { getAppStoreUrl }
