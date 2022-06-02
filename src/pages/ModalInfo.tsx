import Modal from "../components/Modal";
import { ButtonModal, Container } from "../ui/Modal";

export type Props = {
  stateModal: boolean;
  setStateModal: () => void;
};

function ModalInfo({ stateModal, setStateModal }: Props) {
  return (
    <Modal stateModal={stateModal} setStateModal={setStateModal}>
      <Container>
        <p>
          Welcome! GET OUT BCN is a collaborative database of cool spots in
          Barcelona that don't appear in the typical guidebooks. It is divided
          into different categories. Feel free to register yourself to browse or
          to add spots to the database that you think may be interesting for
          other users.
        </p>
        <p>
          This application has just started, so expect improvements to be made
          over time. If you find any bugs or have any suggestions or whatever,
          you can make them in the contact section.
        </p>
        <span>GET OUT!</span>
        <ButtonModal onClick={() => setStateModal()}>I GET IT!</ButtonModal>
      </Container>
    </Modal>
  );
}

export default ModalInfo;
