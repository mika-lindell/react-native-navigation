#import "RNNDotIndicatorOptions.h"
#import "RNNNullBool.h"
#import "RNNNullColor.h"
#import "RNNNullNumber.h"

@implementation RNNDotIndicatorOptions
- (instancetype)initWithDict:(NSDictionary *)dict {
    self = [super initWithDict:dict];

    self.color = [RNNColorParser parse:dict key:@"color"];
    self.size = [RNNNumberParser parse:dict key:@"size"];
    self.visible = [RNNBoolParser parse:dict key:@"visible"];
    return self;
}

- (instancetype)init {
    _color = [RNNNullColor new];
    _size = [RNNNullNumber new];
    _visible = [RNNNullBool new];
    return self;
}

- (void)mergeOptions:(RNNDotIndicatorOptions *)options {
    if (options.color.hasValue)
        self.color = options.color;
    if (options.size.hasValue)
        self.size = options.size;
    if (options.visible.hasValue)
        self.visible = options.visible;
}

- (bool)hasValue {
    return [self.visible hasValue];
}

@end
