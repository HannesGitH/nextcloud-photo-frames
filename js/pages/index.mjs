import { h } from "https://esm.sh/preact";
import htm from "https://esm.sh/htm";
const html = htm.bind(h);

export default function IndexPage(props) {
  return html`
    <h2>Photo Frames</h2>

    <div class="list">
      ${props.frames.map((frame) => {
        return html`
        <div class="frame">
          <img src="<?= $urlGenerator->linkToRouteAbsolute('photo_frames.page.photoframeImage', ["shareToken" => $frame->getShareToken()]) ?>" />
          <div class="grow">
            <div class="flex">
            <h2 class="grow">
              <!-- $frame->getName() ?> -->
            </h2>

            <form data-delete data-confirm="Are you sure that you want to delete the frame"
              action="<?= $urlGenerator->linkToRoute('photo_frames.page.destroy', ["id" => $frame->getId()]) ?>">
              <button class="error">Delete</button>
            </form>
          </div>
            <p>
              <strong>Album:</strong> <?= $frame->getAlbumName() ?>
            </p>

            <p>
              <strong>Select:</strong>
              <!-- <?= [
                FrameMapper::SELECTION_METHOD_LATEST => "Latest",
                FrameMapper::SELECTION_METHOD_OLDEST => "Oldest",
                FrameMapper::SELECTION_METHOD_RANDOM => "Random"
              ][$frame->getSelectionMethod()]; -->
              ?>
            </p>
            <p>
            <strong>Rotation:</strong>
            <!-- <?= $frame->getRotationsPerUnit() ?>
            <?= $frame->getRotationsPerUnit() === 1 ? "photo" : "photos" ?> -->
            per
            <!-- <?= [
              FrameMapper::ROTATION_UNIT_DAY => "day",
              FrameMapper::ROTATION_UNIT_HOUR => "hour",
              FrameMapper::ROTATION_UNIT_MINUTE => "minute",
            ][$frame->getRotationUnit()];
            ?> -->
            </p>
            <p>
            <strong>Start day at:</strong>
            <!-- <?= $frame->getStartDayAt() ?> -->
            </p>
            <p>
            <strong>End day at:</strong>
            <!-- <?= $frame->getEndDayAt() ?> -->
            </p>
            <p>
            <strong>Show date:</strong>
            <!-- <?= $frame->getShowPhotoTimestamp() ? "Enabled" : "Disabled" ?> -->
            </p>
            <div class="actions">
            <!-- <a target="_BLANK"
                href="<?= $urlGenerator->linkToRoute('photo_frames.page.photoframe', ["shareToken" => $frame->getShareToken()]) ?>">
                <button>Show</button>
            </a> -->
            <!-- <a href="<?= $urlGenerator->linkToRoute('photo_frames.page.edit', ["id" => $frame->getId()]) ?>">
                <button>Edit</button>
            </a> -->
            <!-- <button
                data-qr-link="<?= $urlGenerator->linkToRouteAbsolute('photo_frames.page.photoframe', ["shareToken" => $frame->getShareToken()]) ?>">
                Show QR
            </button>-->
            <!-- <button class="primary"
                data-copy-link="<?= $urlGenerator->linkToRouteAbsolute('photo_frames.page.photoframe', ["shareToken" => $frame->getShareToken()]) ?>">
                Copy link
            </button> -->
            </div>
          </div>
        </div>
      `;
      })}
    </div>

    <div class="flex actions">
      <div class="grow"></div>
      <!-- <a href="<?= $urlGenerator->linkToRoute('photo_frames.page.new') ?>">
        <button class="primary">New frame</button>
      </a> -->
    </div>

    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-content"></div>
        <button class="modal-close primary">Close</button>
      </div>
    </div>
  `;
}
