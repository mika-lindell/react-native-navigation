#import "RNNPreviewOptions.h"

@implementation RNNPreviewOptions

- (instancetype)initWithDict:(NSDictionary *)dict {
    self = [super initWithDict:dict];

    self.reactTag = [RNNNumberParser parse:dict key:@"reactTag"];
    self.height = [RNNNumberParser parse:dict key:@"height"];
    self.width = [RNNNumberParser parse:dict key:@"width"];
    self.commit = [RNNBoolParser parse:dict key:@"commit"];
    self.actions = dict[@"actions"];

    return self;
}

- (void)mergeOptions:(RNNPreviewOptions *)options {
    if (options.reactTag.hasValue)
        self.reactTag = options.reactTag;
    if (options.height.hasValue)
        self.height = options.height;
    if (options.width.hasValue)
        self.width = options.width;
    if (options.commit.hasValue)
        self.commit = options.commit;
    if (options.actions)
        self.actions = options.actions;
}

@end
