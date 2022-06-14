import { ActionIcon, Group, Text } from "@mantine/core";
import { ThumbDown, ThumbUp } from "tabler-icons-react";
import { PostVoteType } from "../../types/enum";

interface PostFooterProps {
  likes: number;
  dislikes: number;
  voteStatus?: PostVoteType;
  onLike?: () => void;
  onDislike?: () => void;
}
// DESC:
// if user is not logged In
// DO: redirect to login on cliking LIKE or DISLIKE
// else
// if post has already been liked or disliked
// DO: update vote mutation (cliking the same updates to none)
// else
// DO: create new vote with that value
export function PostFooter({
  likes,
  dislikes,
  voteStatus = PostVoteType.NONE,
  onLike,
  onDislike,
}: PostFooterProps) {
  return (
    <Group position="apart" px={30}>
      <Group spacing={10}>
        <ActionIcon
          radius="xl"
          sx={(theme) => ({ "&:hover": { color: theme.colors.blue[6] } })}
          onClick={onLike}
          color={voteStatus === PostVoteType.LIKE ? "blue" : undefined}
        >
          <ThumbUp />
        </ActionIcon>
        <Text>{likes}</Text>
      </Group>
      <Group spacing={10}>
        <ActionIcon
          radius="xl"
          sx={(theme) => ({ "&:hover": { color: theme.colors.red[5] } })}
          onClick={onDislike}
          color={voteStatus === PostVoteType.DISLIKE ? "red" : undefined}
        >
          <ThumbDown />
        </ActionIcon>
        <Text>{dislikes}</Text>
      </Group>
    </Group>
  );
}
