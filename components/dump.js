<div className="flex min-w-0 gap-x-4">
                        <div className="flex-none h-12 w-12 rounded-md bg-gray-50 align-center">
                            <p className="text-4xl font-semibold text-center">{user.key}</p>
                        </div>
                        <div class="min-w-0 flex-auto flex-row">
                            <p class="text-sm font-semibold leading-6 text-gray-900">@{user.username}</p>
                            <div class="mt-0 flex items-center text-sm text-gray-500">
                                <UserGroupIcon className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <p class="mt-1 truncate text-xs leading-5 text-gray-500">{formatMillions(user.follower_count)}</p>
                            </div>
                            <div class="mt-0 flex items-center text-sm text-gray-500">
                                <UsersIcon className="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                <p class="mt-1 truncate text-xs leading-5 text-gray-500">{formatMillions(user.following_count)}</p>
                            </div>
                        </div>
                        <div class="sm:flex sm:flex-col sm:items-end">
                                <p class="text-sm leading-6 text-gray-900">{user.diff_followers}</p>
                                <p class="mt-1 text-xs leading-5 text-gray-500">5 days: {user.diff_followers_5_days}</p>
                                <p class="mt-1 text-xs leading-5 text-gray-500">30 days: {user.diff_followers_5_days}</p>
                        </div>
                    </div>