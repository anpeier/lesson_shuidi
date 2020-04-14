// 355. 设计推特
// 设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，
// 能够看见关注人（包括自己）的最近十条推文。你的设计需要支持以下的几个功能：
// postTweet(userId, tweetId): 创建一条新的推文
// getNewsFeed(userId): 检索最近的十条推文。每个推文都必须是由此用户关注的人
// 或者是用户自己发出的。推文必须按照时间顺序由最近的开始排序。
// follow(followerId, followeeId): 关注一个用户
// unfollow(followerId, followeeId): 取消关注一个用户

/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.article = [];//所有用户及其推文[[用户id，推文id],[],[]]
    this.user = new Map();//所有用户及其关注的user[]
    this.tfUser = function (userId) {
        if(!this.user.has(userId)) this.user.set(userId, []);
    }
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.article.unshift([userId, tweetId]);

    this.tfUser(userId);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    this.tfUser(userId);
    let arr = this.user.get(userId);
    arr.push(userId);
    let res = [];
    this.article.forEach((values) => {
        if(arr.includes(values[0])) {
            res.push(values[1]);
        }
    })
    if(res.length > 10) res = res.slice(0,10);
    return res;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    this.tfUser(followerId);
    this.user.get(followerId).push(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.tfUser(followerId);
    let index = this.user.get(followerId).indexOf(followeeId);
    if(index !== -1) {
        this.user.get(followerId).splice(index,1);
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
