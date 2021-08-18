import colors from "./colors";

export default {
  separator: {
    marginVertical: 3
  },
  emptyListMessage: {
    marginTop: 15,
    color: colors.textGray,
    fontSize: 16,
    alignSelf: 'center'
  },
  button: {
    marginTop: 'auto',
    borderRadius: 10,
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
    elevation: 3
  },
  buttonText: {
    color: colors.textLight,
  },
  container: {
    flex: 1,
    padding: 6
  },
  valueBox: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  column: {
    width: '50%',
    alignItems: 'center',
  },
  infoTitle: {
    color: colors.textGray,
    fontSize: 16,
    marginBottom: 5
  },
  infoValue: {
    fontSize: 28
  },
  infoUnit: {
    color: colors.textGray,
    marginHorizontal: 3,
    marginBottom: 3,
    fontSize: 16
  },
}