export interface Event {
    id: string;
    type: EventType;
    createdAt: Date;
}

export function generateMockEvent(): Event {
    return {
        id: '',
        type: null,
        createdAt: new Date(),
    };
}

export enum EventType {
    CommitCommentEvent = 'CommitCommentEvent',
    CreateEvent = 'CreateEvent',
    DeleteEvent = 'DeleteEvent',
    DeploymentEvent = 'DeploymentEvent',
    DeploymentStatusEvent = 'DeploymentStatusEvent',
    DownloadEvent = 'DownloadEvent',
    FollowEvent = 'FollowEvent',
    ForkEvent = 'ForkEvent',
    ForkApplyEvent = 'ForkApplyEvent',
    GistEvent = 'GistEvent',
    GollumEvent = 'GollumEvent',
    InstallationEvent = 'InstallationEvent',
    InstallationRepositoriesEvent = 'InstallationRepositoriesEvent',
    IssueCommentEvent = 'IssueCommentEvent',
    IssuesEvent = 'IssuesEvent',
    LabelEvent = 'LabelEvent',
    MarketplacePurchaseEvent = 'MarketplacePurchaseEvent',
    MemberEvent = 'MemberEvent',
    MembershipEvent = 'MembershipEvent',
    MilestoneEvent = 'MilestoneEvent',
    OrganizationEvent = 'OrganizationEvent',
    OrgBlockEvent = 'OrgBlockEvent',
    PageBuildEvent = 'PageBuildEvent',
    ProjectCardEvent = 'ProjectCardEvent',
    ProjectColumnEvent = 'ProjectColumnEvent',
    ProjectEvent = 'ProjectEvent',
    PublicEvent = 'PublicEvent',
    PullRequestEvent = 'PullRequestEvent',
    PullRequestReviewEvent = 'PullRequestReviewEvent',
    PullRequestReviewCommentEvent = 'PullRequestReviewCommentEvent',
    PushEvent = 'PushEvent',
    ReleaseEvent = 'ReleaseEvent',
    RepositoryEvent = 'RepositoryEvent',
    StatusEvent = 'StatusEvent',
    TeamEvent = 'TeamEvent',
    TeamAddEvent = 'TeamAddEvent',
    WatchEvent = 'WatchEvent',
}
